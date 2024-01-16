import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { url } from "../utils/api";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { app } from "../firebase";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user");
  const [file, setFile] = useState("");
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  console.log("error", error);
  const navigate = useNavigate();
  console.log("formData", formData);
  console.log("file", file);

  const handleImageSubmit = async () => {
    const selectedFile = file[0];

    if (selectedFile) {
      try {
        setUploading(true);
        setImageUploadError(false);

        const downloadURL = await storeImage(selectedFile);
        // console.log("imageUrl", downloadURL.downloadURL);
        setFormData({
          ...formData,
          imageUrl: downloadURL.downloadURL,
        });

        setImageUploadError(false);
        setUploading(false);

        return downloadURL; // Return the image URL for further use
      } catch (err) {
        setImageUploadError("Image upload failed (2 MB max per image)");
        setUploading(false);
        throw err; // Propagate the error to handle it in the main submit function
      }
    } else {
      setImageUploadError("Please select one image for upload");
      setUploading(false);
      return null;
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      console.log("  file.name", file);
      console.log("  file.type", file.type);

      const fileName = `kyc/${new Date().getTime()}_${formData.username}_${
        file.name
      }`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({ downloadURL, ref: uploadTask.snapshot.ref });
          });
        }
      );
    });
  };

  const handleImageDelete = (storageRef) => {
    const storage = getStorage(app);
    const imageRef = ref(storage, storageRef.fullPath);

    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  // const handleRemoveImage = () => {
  //   setFormData({
  //     ...formData,
  //     imageUrls: "", // Clear the array when removing the image
  //   });
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setRole(e.target.checked ? "agent" : "user");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;

      if (role === "agent") {
        imageUrl = await handleImageSubmit();
      }

      const res = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await res.json();

      setLoading(false);

      if (role === "agent" && imageUrl && data.success === false) {
        // Delete the uploaded image if there's a database error
        handleImageDelete(imageUrl.ref);
      }

      if (data.success === false) {
        setError(data.message);
        return;
      }

      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 bg-image overflow-hidden">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-4 max-w-lg"
      >
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <label htmlFor="agent">Are you an agent?</label>{" "}
          <input
            className="border p-2 rounded-full "
            type="checkbox"
            id="agent"
            checked={role === "agent"}
            onChange={handleCheckboxChange}
          />
        </div>
        {role === "agent" ? (
          <input
            type="file"
            placeholder="upload document"
            className="border p-3 bg-white rounded-lg"
            id="document"
            accept="image/*"
            onChange={(e) => setFile(e.target.files)}
          />
        ) : null}
        <p className="text-red-700 text-sm">
          {imageUploadError && imageUploadError}
        </p>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="m-auto ">
        <div className="flex gap-2 mt-5 justify-center">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </div>
    </div>
  );
}

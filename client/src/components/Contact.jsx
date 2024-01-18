import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../utils/api";
import { toast } from "react-hot-toast";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`${url}/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          {/* <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p> */}
          {/* <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea> */}

          <Link
            // to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            to={"https://wa.me/+2349063964547"}
            target="_blank"
            className="bg-violet-500 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Message Us
          </Link>
        </div>
      )}
    </>
  );
}

import logo from "../image/homenow.png";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MdCall, MdEmail, MdWebStories, MdWhatsapp } from "react-icons/md";

function Reciept() {
  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className=" bg-blue-200 m-auto h-auto rounded-md">
      <div className="receipt-box">
        {/* actual receipt */}
        <div className="actual-receipt bg-blue-200 p-5">
          {/* organization logo */}
          <div className="receipt-organization-logo h-15 w-3/12 sm:h-25 sm:w-2/6">
            <img alt="logo" src={logo} />
          </div>

          {/* organization name */}

          {/* street address and unit number */}
          <h6 className="text-base mt-2">ABC Street 123</h6>

          {/* city province postal code */}
          <h6 className="text-base">oshogbo</h6>

          {/* email-phone-and-website */}
          <div className="phone-and-website mt-3 text-base">
            <p className="flex items-center gap-2">
              <MdWhatsapp color="green" /> 09063964547
            </p>
            <p className="flex items-center gap-2">
              <MdCall color="green" /> 09063964547
            </p>
            <p className="flex items-center gap-2">
              <MdWebStories color="green" />{" "}
              <a
                href="https://www.homenow.com.ng"
                target="_blank"
                className="text-blue-500"
                rel="noreferrer"
              >
                homenow.com.ng
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail color="green" />{" "}
              <a
                href={`mailto:anwarhamza919@gmail.com`}
                className="text-blue-500"
              >
                homenow@gmail.com
              </a>
            </p>
          </div>

          <div className="colored-row first mt-5">
            <span className="font-bold text-base">Payment For</span>
          </div>

          <div className="data-row text-base">
            <span className="font-weight">CREDIT</span>
            <span>************4444</span>
          </div>
          <p>---------------------------------------</p>
          <div className="colored-row mt-3 text-base">
            <span className="font-bold">Amount</span>
          </div>

          <div className="data-row text-base">
            <span className="font-weight">Dollar a Day for Sadaqa</span>
            <span>$ 50</span>
          </div>

          <div className="colored-row mt-3 text-base">
            <span className="font-bold">Transaction Details </span>
            <span />
          </div>

          <div className="data-row border-t border-gray-200 text-base">
            <span className="font-weight">MID: 1234567</span>
            <span className="font-weight">Sequence #SSSSSSSS</span>
          </div>

          <div className="data-row border-t border-gray-200 text-base">
            <span className="font-weight">Invoice #: AX1234ZVB5671234</span>
            <span className="font-weight">Created: 2023-02-14 02:21:37</span>
          </div>
          <div className="data-row border-t border-gray-200 text-base">
            <span className="font-weight">Authentication #: TEST</span>
            <span className="font-weight">Batch #: 1234</span>
          </div>
          <div className="data-row border-t border-gray-200 text-base">
            <span className="font-weight">Transaction: APPROVED - 00</span>
            <span />
          </div>
          <div className="colored-row mt-3 text-base">
            <span className="font-bold">Thank You For Your Patronage</span>
            <span />
          </div>
        </div>
        {/* end of actual receipt */}

        {/* receipt action */}
        <div className="receipt-actions-div py-2 text-center ">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button border border-blue-500 text-blue-500 font-bold px-4 py-2 cursor-pointer"
              onClick={downloadPDF}
              disabled={loader}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reciept;

import { useState } from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const sendOTP = async () => {
    try {
      if (!phone || phone.length !== 10) {
        alert("Enter valid phone number");
        return;
      }

      // Create recaptcha only once
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => {
              console.log("Recaptcha verified");
            },
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmation(result);
      alert("OTP Sent Successfully ✅");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      if (!confirmation) {
        alert("Please send OTP first");
        return;
      }

      await confirmation.confirm(otp);

      localStorage.setItem("phone", phone);

      alert("Phone Verified Successfully ✅");

      window.location.href = "/cart";
    } catch (error) {
      console.error(error);
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Phone Verification
      </h2>

      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={sendOTP}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send OTP
      </button>

      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 w-full mt-4 mb-3"
      />

      <button
        onClick={verifyOTP}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default PhoneAuth;
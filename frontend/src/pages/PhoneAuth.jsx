import { useState } from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  // ✅ Send OTP
  const sendOTP = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmation(result);
      alert("OTP Sent ✅");
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  // ✅ Verify OTP
  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      alert("Phone Verified ✅");

      // Save phone for later (Cart page)
      localStorage.setItem("phone", phone);
    } catch (err) {
      console.error(err);
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">📱 Phone Verification</h2>

      <input
        type="text"
        placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 mb-3 block"
      />

      <button onClick={sendOTP} className="bg-blue-500 text-white p-2">
        Send OTP
      </button>

      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        autoComplete="one-time-code" // ✅ auto-fill
        className="border p-2 mt-3 block"
      />

      <button onClick={verifyOTP} className="bg-green-500 text-white p-2 mt-2">
        Verify OTP
      </button>
    </div>
  );
};

export default PhoneAuth;
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mt-20 bg-white/90 rounded-lg py-8 px-6 sm:py-12 sm:px-8">
        <h1 className="text-2xl font-bold text-green-600">
          ✅ Payment Successful!
        </h1>
        <p className="mt-2">Thank you for purchasing the Premium Image Pack.</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-10 px-3 py-2 rounded-lg bg-gradient-to-br from-green-300 to-orange-300 cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}

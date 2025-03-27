import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const SupabaseAuth = ({ onClose }: { onClose: () => void }) => {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    if (!email) return;
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      alert("Check your email for the login link!");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-white">Sign In</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-4 w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
          onClick={handleSignIn}
        >
          Send Magic Link
        </button>
        <button
          className="mt-2 w-full text-gray-400 text-sm hover:underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

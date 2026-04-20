import { Card, HR, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import zxcvbn from "zxcvbn";

function PasswordCard() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const handleToggle = () => setShow(!show);
  const handleChange = (e) => {
    setPassword(e.target.value);
    setResult(e.target.value ? zxcvbn(e.target.value) : null);
  };
  const getBarColor = (score) => {
    switch (score) {
      case 0:
        return "bg-red-600";
      case 1:
        return "bg-red-400";
      case 2:
        return "bg-yellow-400";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const getStrengthLabel = (score) => {
    const labels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
    return labels[score] || "";
  };

  const hasTwelveChars = password.length >= 12;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  return (
    <Card href="#" className="max-w-xl mx-auto mt-10 rounded-3xl">
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">
        Take a moment to check if your passwords are easy pickings for bad
        actors
      </h5>
      <span className="bg-gray-200 rounded-xl">
        <input
          value={password}
          onChange={handleChange}
          type={show ? "text" : "password"}
          name=""
          id=""
          placeholder="Enter a password"
          className="p-3 rounded-xl w-120 outline-none"
        />
        <span>
          <button className="cursor-pointer p-3 rounded" onClick={handleToggle}>
            {show ? <GrHide /> : <BiShow />}
          </button>
        </span>
      </span>
      {result && (
        <div className="leading-loose">
          <p>Score: {getStrengthLabel(result.score)}</p>
          <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out ${getBarColor(result.score)}`}
              style={{ width: `${(result.score + 1) * 20}%` }}
            ></div>
          </div>
          <p>
            Estimated Crack Time:{" "}
            {result.crack_times_display.offline_slow_hashing_1e4_per_second}
          </p>
          <HR className="my-2" />
          <div>
            <h1 className="font-semibold ">Password Composition</h1>
            <p className="text-xs text-gray-500 mb-3">Make sure that your password is long enough and contains various types of characters.  </p>
            <div class="flex items-center mb-4">
              <input
                checked={hasTwelveChars}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
                for="default-checkbox"
                class="select-none ms-2 text-sm font-medium text-heading"
              >
                At least 12 characters
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                checked={hasLowerCase}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
                for="default-checkbox"
                class="select-none ms-2 text-sm font-medium text-heading"
              >
                Lowercase
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                checked={hasUpperCase}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
                for="default-checkbox"
                class="select-none ms-2 text-sm font-medium text-heading"
              >
                Uppercase
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                checked={hasSpecialSymbols}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
                for="default-checkbox"
                class="select-none ms-2 text-sm font-medium text-heading"
              >
                Special Symbols
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                checked={hasNumbers}
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
                for="default-checkbox"
                class="select-none ms-2 text-sm font-medium text-heading"
              >
                Numbers
              </label>
            </div>
          </div>
          <p>Feedback: {result.feedback.suggestions.join(", ")}</p>
        </div>
      )}
    </Card>
  );
}

export default PasswordCard;

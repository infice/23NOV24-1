import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Added phone state
  const [country, setCountry] = useState("th"); // Added country state
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    // Validate email
    if (!email.endsWith("@dpu.ac.th")) {
      setError("Invalid email address");
      return;
    }

    // Clear errors if all validations pass
    setError("");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Country:", country);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!name || !email} // Corrected disabled logic
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="th">Thailand</option>
          <option value="us">America</option>
          <option value="cn">China</option>
        </select>
      </label>
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

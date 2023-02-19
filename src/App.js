import "./styles.css";
import { useState } from "react";
import { initialValues } from "./initialState";
import { validate } from "./Validate";

export default function App() {
  const [formFields, setFormFields] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      errors: { ...formFields.errors, [name]: validate(name, value) },
      fields: {
        ...formFields.fields,
        [name]: value
      }
    });
  };
  console.log(formFields.errors);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          name="firstname"
          value={formFields.fields.firstname}
          onChange={handleChange}
        />
        <p>{formFields.errors.firstname}</p>
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastname"
          value={formFields.fields.lastname}
          onChange={handleChange}
        />
        <p>{formFields.errors.lastname}</p>
        <br />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formFields.fields.email}
          onChange={handleChange}
        />
        <p>{formFields.errors.email}</p>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

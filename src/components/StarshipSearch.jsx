import { useState } from 'react';

const StarshipSearch = ({ fetchData }) => {
  const initialState = {
    name: ''
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(formData.name);
    setFormData(initialState);
  };

  return (
    <section>
      <h2>Search for a Starship</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Choose a starship:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;

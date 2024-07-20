// Handle form submission
const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect data from state
    const formData = { name, email };

    try {
      // Send data to the backend
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
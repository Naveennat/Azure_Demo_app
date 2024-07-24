export const API_URL = "https://azuretest-sn.azurewebsites.net";

/**
 * Sends a POST request to the backend to get a response from the AI.
 * @param {string} question - The question to send to the AI.
 * @returns {Promise<string>} - The response from the AI.https://azuretest-sn.azurewebsites.net/api/get-link-response
 */
export const getAIResponse = async (question) => {
  try {
    const response = await fetch(`${API_URL}/api/get-link-response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from the server");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "An error occurred while processing your request.";
  }
};

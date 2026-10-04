// Construit le message de salutation renvoyé par l'API.
export function greeting(name) {
  const cleaned = typeof name === "string" && name.trim() !== "" ? name.trim() : "monde";
  return `Bonjour ${cleaned}`;
}

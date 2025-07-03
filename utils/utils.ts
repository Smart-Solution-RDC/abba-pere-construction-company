export function convertFormatDate (dateString: string) {
  
    if (typeof dateString !== 'string' || !dateString) {
    console.warn("Input invalide pour la conversion de date:", dateString);
    return ""; 
  }

  const parts = dateString.split('/');

  if (parts.length !== 3) {
    return dateString; 
  }

  const day = parts[0];
  const month = parts[1];
  const year = parts[2]; 

  return `${month}-${day}-${year}`;
}
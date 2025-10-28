export const truncateText = (str, maxlength) =>{
  return str.length > maxlength ? str.split(' ').slice(0, maxlength).join(' ') + "…" : str;
}

export const handleCtaClick = (navigate, route) => {
  navigate(route);
}
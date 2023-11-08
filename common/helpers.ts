export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next sections
    element.scrollIntoView({ behavior: "smooth"});
  }
};

export const isDev = process.env.NODE_ENV === "development"

export const useClick = (onClick) => {
  const element = useRef();

  if (typeof onClick !== "function") {
    return;
  }

  useEffect(() => {
    // componentDidMount 때
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // clean up ==> componentWillUnMount때 호출된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

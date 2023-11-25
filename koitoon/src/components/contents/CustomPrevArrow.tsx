 const  CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`} // 여기에 추가적인 클래스명을 지정
        style={{ ...style, display: "block", background: "red" }} // 스타일을 정의
        onClick={onClick}
      />
    );
  };
  export default CustomPrevArrow
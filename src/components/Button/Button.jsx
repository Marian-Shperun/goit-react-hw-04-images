import { ButtonEl } from './Button.styled';
const Button = ({ onClick, type, title, children, loadMore }) => {
  return (
    <ButtonEl loadMore={loadMore} type={type} onClick={onClick}>
      {title && title}
      {children && children}
    </ButtonEl>
  );
};
export default Button;

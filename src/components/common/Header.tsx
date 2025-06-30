import { HEADER_STYLE } from '@/constants/styles';

type HeaderProps = { headerTitle: string };

const Header = ({ headerTitle }: HeaderProps) => {
  return (
    <div className={HEADER_STYLE.titleContainer}>
      <h1 className={HEADER_STYLE.titleText}>{headerTitle}</h1>
    </div>
  );
};

export default Header;

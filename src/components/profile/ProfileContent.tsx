import { PROFILE_CONTENT_STYLE as style } from '@/constants/styles';
import { useProfileQuery } from '@/hooks/useProfileQuery';
import { User2 } from 'lucide-react';

const ProfileContent = () => {
  const { data } = useProfileQuery();

  return (
    <div className={style.wrapper}>
      <User2 className={style.avatarIcon} />

      <div className={style.infoContainer}>
        <div className={style.row}>
          <span className={style.label}>닉네임</span>
          <span>{data?.nickname}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>이메일</span>
          <span>{data?.email}</span>
        </div>
        <div className={style.rowWithCenter}>
          <span className={style.label}>소셜로그인</span>
          <div className={style.socialIconWrapper}>
            {data?.provider === 'KAKAO' ? (
              <img
                src="/src/assets/icons/login_icon_kakao.png"
                alt="카카오 로그인"
                className={style.socialIconImage}
              />
            ) : (
              <img
                src="/src/assets/icons/login_icon_naver.png"
                alt="네이버 로그인"
                className={style.socialIconImage}
              />
            )}
          </div>
        </div>
        <div className={style.rowWithCenter}>
          <span className={style.label}>웹훅</span>
          <button className={style.webhookButton}>연동 하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

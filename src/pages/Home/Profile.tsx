import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProfileContent from '@/components/profile/ProfileContent';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { Suspense } from 'react';

const Profile = () => {
  return (
    <div className={style.pageWrapper}>
      {/* 헤더 공간 */}
      <header className={style.header}></header>

      {/* 본문 영역 */}
      <main className={style.main}>
        <Suspense fallback={<LoadingSpinner />}>
          <ProfileContent />
        </Suspense>

        {/* 하단 로그아웃 버튼 */}
        <div className={style.logoutWrapper}>
          <button className={style.logoutButton} disabled>
            로그아웃
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;

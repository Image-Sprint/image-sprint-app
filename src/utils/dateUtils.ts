export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const month = date.getMonth() + 1; // JS는 0부터 시작
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 항상 두 자리로 만들기 (예: 21:05)
  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${month}월 ${day}일 ${pad(hours)}:${pad(minutes)}`;
};

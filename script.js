const today = new Date();
const days = document.querySelectorAll('.day');

days.forEach((day, index) => {
    const unlockDate = new Date(2024, 11, index + 1); // 12월 1일부터 시작
    if (today >= unlockDate) {
        day.classList.remove('locked');
        day.classList.add('unlocked');

        // 이미지 표시
        const img = day.querySelector('.day-image');
        if (img) {
            img.classList.remove('hidden');
        }

        // 클릭 이벤트 추가
        day.addEventListener('click', () => {
            alert(`Day ${index + 1} - 사진이 열렸습니다!`);
        });
    }
});

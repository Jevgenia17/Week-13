const beforeBirthdayApp = document.querySelector('.before-birth-app');

const inputDay = beforeBirthdayApp.querySelector('.date-before');
const resultBtn = beforeBirthdayApp.querySelector('.before-birth-app__btn');
const resultText = beforeBirthdayApp.querySelector('.before-birth-app__result');

function calcDaysBeforeBirth() {
    const dateOfBirthStr = inputDay.value;

   if (dateOfBirthStr === ''){
    resultText.textContent = 'Пожалуйста, введите дату рождения';
   } else { 
    const dateNow = Date.now();
    const dateOfBirthObj = new Date(dateOfBirthStr);
    const dateOfBirth = dateOfBirthObj.getTime();
    const resultDate = dateOfBirth - dateNow;

    const result = Math.floor(resultDate / (1000 * 60 * 60 * 24));

    const lastNumberFromDay = String(result).at(-1);

    let day = 'дней';
   switch (lastNumberFromDay) {
    case '1': {
        day = 'день';
        break;
    }
    case '2':
    case '3':
    case '4': {
        day = 'дня';
        break;
    }
    default: {
        day = 'дней';
        break;
    }
   }
  
    resultText.textContent = `До Вашего дня рождения осталось ${result} ${day}`;

   }

   
}

resultBtn.addEventListener('click', calcDaysBeforeBirth)

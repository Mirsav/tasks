import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Данные регистрации', data)
    alert('Регистрация прошла успешно')
  };

  const password = watch("password")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          {...register("name", { required: "Имя обязательно" })}
        />
        <label> Имя</label>
      {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
      </div>

      <div>
        <input
          type="email"
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        <label> Email</label>
         {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
      </div>

      <div>
        <input
          type="password"
          {...register("password", {
            required: "Обязательное поле",
            minLength: {
              value: 6,
              message: "Пароль должен содержать минимум 6 символов",
            },
            validate: {
              hasUppercase: (value) =>
                /[A-Z]/.test(value) || "Нужна хотя бы одна заглавная буква",
            },
          })}
        />
        <label> Пароль</label>
        {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
      </div>

      <div>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Обязательное поле",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        <label> Подтверждение пароля</label>
        {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
      </div>

      <div>
        <input
          type="date"
          {...register("BirthDate", { required: "Обязательное поле" })}
        />
        <label> Дата рождения</label>
        {errors.birthDate && <span style={{color: 'red'}}>{errors.birthDate.message}</span>}
      </div>

      <div>
        <select
          {...register("gender", {
            required: "Обязательное поле",
          })}
        >
          <option value="">Выберите...</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <label> Пол</label>
        {errors.gender && <span style={{color: 'red'}}>{errors.gender.message}</span>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          {...register("phone", {
            required: "Обязательное поле",
            pattern: {
              value: /^\+?[\d\s\-\(\)]+$/,
              message: "Неправильный номер телефона",
            },
          })}
        />
        <label> Номер телефона</label>
        {errors.phone && <span style={{color: 'red'}}>{errors.phone.message}</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegistrationForm;

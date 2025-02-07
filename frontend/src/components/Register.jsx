import { Button, Card, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="py-2 flex justify-center items-center flex-col">
      <h1 className="drop-shadow-md text-center text-white text-4xl pb-4 font-bold">
        Registro
      </h1>
      <Card className="sm:w-96 bg-white/19 backdrop-blur-2xl backdrop-saturate-90 rounded-lg border border-gray-200/30 drop-shadow-2xl shadow-2xl">
      {
        error.map((error, i) =>(
          <div className="bg-red-600 text-white p-2 rounded" key={i}>
            {error}
          </div>
        )
      )
      }
        <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-white drop-shadow-md"
                htmlFor="nombre2"
                value="NOMBRE"
              />
            </div>
            <TextInput
              id="nombre2"
              type="text"
              {...register("name", { required: true })}
              placeholder="nombre"
            />
            {errors.name && (
              <p className="text-red-700 font-semibold drop-shadow-md">El nombre es requerido</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-white drop-shadow-md"
                htmlFor="apellido2"
                value="APELLIDO"
              />
            </div>
            <TextInput
              id="apellido2"
              type="text"
              {...register("lastName", { required: true })}
              placeholder="apellido"
            />
            {errors.name && (
              <p className="text-red-700 font-semibold drop-shadow-md">El Apellido es requerido</p>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                className="text-white drop-shadow-md"
                htmlFor="email2"
                value="EMAIL"
              />
            </div>
            <TextInput
              id="email2"
              type="email"
              {...register("email", { required: true })}
              placeholder="correo@gmail.com"
            />
            {errors.email && (
              <p className="text-red-700 font-semibold drop-shadow-md">El email es requerido</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-white drop-shadow-md"
                htmlFor="password2"
                value="CONTRASEÑA"
              />
              {errors.password && (
                <p className="text-red-700 font-semibold drop-shadow-md">La contraseña es requerida</p>
              )}
            </div>
            <TextInput
              id="password2"
              {...register("password", { required: true })}
              placeholder="1234"
            />
          </div>
          <Button className="bg-azul2 drop-shadow-md" type="submit">
            <p>Registrarse</p>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;

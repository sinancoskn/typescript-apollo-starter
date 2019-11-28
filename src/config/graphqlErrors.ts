import { createError } from "apollo-errors";
// Genel hata, aşağıdaki durumlardan biri değil ise atıyor.
export const UnknownError = createError("UnknownError", {
  message: "Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin."
});

export const GeneralError = data =>
  createError("GeneralError", {
    message: "Bir hata oluştu.",
    data: data
  });

// Giriş yapma hatası
export const LoginError = createError("LoginError", {
  message: "E-posta veya şifre yanlış."
});

// Giriş yapma hatası
export const AuthenticationRequiredError = createError("AuthenticationRequiredError", {
  message: "Giriş yapmalısınız."
});

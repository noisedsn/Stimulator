import i18next from "https://deno.land/x/i18next/index.js";
import Backend from "https://deno.land/x/i18next_fs_backend/index.js";

export const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
await i18next
  .use(Backend)
  .init({
    backend: {
      loadPath: new URL(import.meta.resolve("./locales")).pathname +
        "/{{lng}}/{{ns}}.json",
    },
  });
await i18next.changeLanguage(systemLocale);

const i18n = (lng?: string) => i18next.getFixedT(lng || systemLocale);

export { i18next };
export default i18n;
const rawT = i18n();
export const t = (string: string) => {
  const translated = rawT(string);
  if (translated) {
    return translated;
  } else {
    return string;
  }
};

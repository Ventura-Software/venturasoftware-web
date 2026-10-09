// Loads every ./<lang>/<namespace>.ts file and merges them into a single
// `translation` namespace per language. Each file's top-level keys must be
// unique across the files of the same language.
const modules = import.meta.glob('./*/*.ts', { eager: true });

type Messages = Record<string, unknown>;

const messages: Record<string, { translation: Messages }> = {};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang] = match;
    const module = modules[path] as { default?: Messages };

    if (!messages[lang]) {
      messages[lang] = { translation: {} };
    }

    if (module.default) {
      messages[lang].translation = {
        ...messages[lang].translation,
        ...module.default,
      };
    }
  }
});

export default messages;

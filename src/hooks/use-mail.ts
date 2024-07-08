import { atom, useAtom } from "jotai";
import { Mail, mails } from "~/data/mail-data";

type Config = {
  selected: Mail["id"] | null;
};

const configAtom = atom<Config>({
  selected: mails.length > 0 ? mails[0]?.id ?? null : null,
});

export function useMail() {
  return useAtom(configAtom);
}


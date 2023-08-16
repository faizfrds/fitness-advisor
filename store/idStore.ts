import { create } from "zustand"

interface IdStore {
    id: string;
}

const useIdModal = create<IdStore>(() => ({
    id: "",
}))

export default useIdModal;
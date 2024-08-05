export interface ProgramIconBtnInterface {
    title: string,
    titleColor?: string,
    icon: string,
    loading_icon: string,
    description?: string,
    onClick?: () => void,
    onDoubleClick?: () => void,
}
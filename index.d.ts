import { ViewStyle } from 'react-native';

export interface OnChangeProps {
    base64DataUrl: string
}

export interface OnErrorProps {
    details: string
}

export interface SignaturePadProps {
    onChange: (props: OnChangeProps) => void;
    onError: (props: OnErrorProps) => void;
    style?: ViewStyle;
    penColor?: string;
    dataURL?: string;
}

export default SignaturePad;

import * as C from './styles';

export interface PhotoItemProps {
    url: string;
    name: string;
}

export function PhotoItem ({ url, name }: PhotoItemProps) {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}
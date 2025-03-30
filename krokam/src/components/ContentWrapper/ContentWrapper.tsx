import {ReactNode} from "react";

type ContentWrapperProps = {
    children: ReactNode
    type: 'header' | 'main' | 'footer'
    className?: string
    id?:string
};

export const ContentWrapper = ({children, type, className, id}: ContentWrapperProps) => {
    const showHeader = type === 'header';
    const showMain = type === 'main';
    const showFooter = type === 'footer';

    return (
        <>
            {showHeader && (<header id={id} className={className}>{children}</header>)}
            {showMain && (<main className={className}>{children}</main>)}
            {showFooter && (<footer id={id}  className={className}>{children}</footer>)}
        </>
    );
};
import {MutableRefObject, ReactNode, useRef} from 'react';
import {useInfiniteScroll} from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './TableScroll.module.scss';

interface TableScrollProps {
    children: ReactNode;
    onScrollEnd: () => void;
}

export const TableScroll = ({children, onScrollEnd}: TableScrollProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <div className={cls.scroll} ref={wrapperRef}>
            {children}
            <div ref={triggerRef} className={cls.scroll__end}>Tsadsadas</div>
        </div>
    );
};

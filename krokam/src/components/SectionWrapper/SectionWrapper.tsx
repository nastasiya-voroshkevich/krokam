import styles from "./SwctionWrapper.module.scss"

interface ISectionWrapperProps  extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
}

export const SectionWrapper = ({className , children, ...attr}:ISectionWrapperProps) => {
   return (
     <div className={ `${styles.section_wrapper} ${className? className: ''}`} {...attr}>{children}</div>
    )

}
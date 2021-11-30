import React, {FC, useMemo}from'react';

export type NoticeProps = {
    heading?:string;
    link?:string;
    description:string;
    type?:'success'|'error'|'info'|'warning',
    onDismiss?:() => void;
}
export const Notice: FC<NoticeProps>= ({ heading, link, description, type,onDismiss }) => {
    const className = useMemo( () => {
        let cN = `notice ${type ?`notice-${type}`:''}`;
        if( onDismiss){
            cN = `${cN} is-dismissible`;
        }
        return cN;
    },[type,onDismiss]);
    return(
    <div className={className}>
      {heading? <h2>{heading}</h2>:null}
      <p className="description">
          {link ? (
             <a href={link} rel="noopener" target="_blank">
               {description}
             </a>
          ): (
            <>{description}   </>
          )
        }
      </p>
    </div>
  );
}

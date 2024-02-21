import React from 'react'
import { type IconPropsType } from './types'

export default function ExternalLink ({ className }: IconPropsType): JSX.Element {
  return (
        <svg className={className} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7222 2.44634C12.4275 2.44634 12.1449 2.32928 11.9365 2.12091C11.7282 1.91253 11.6111 1.62992 11.6111 1.33523C11.6111 1.04055 11.7282 0.757932 11.9365 0.549558C12.1449 0.341184 12.4275 0.224121 12.7222 0.224121H19.3889C19.6836 0.224121 19.9662 0.341184 20.1746 0.549558C20.3829 0.757932 20.5 1.04055 20.5 1.33523V8.0019C20.5 8.29658 20.3829 8.5792 20.1746 8.78757C19.9662 8.99595 19.6836 9.11301 19.3889 9.11301C19.0942 9.11301 18.8116 8.99595 18.6032 8.78757C18.3948 8.5792 18.2778 8.29658 18.2778 8.0019V4.01745L7.95222 14.343C7.74266 14.5454 7.462 14.6574 7.17067 14.6549C6.87934 14.6523 6.60066 14.5355 6.39465 14.3295C6.18864 14.1235 6.07178 13.8448 6.06925 13.5535C6.06672 13.2621 6.17871 12.9815 6.38111 12.7719L16.7067 2.44634H12.7222ZM0.5 4.66857C0.5 4.0792 0.734126 3.51396 1.15087 3.09722C1.56762 2.68047 2.13285 2.44634 2.72222 2.44634H8.27778C8.57246 2.44634 8.85508 2.56341 9.06345 2.77178C9.27183 2.98015 9.38889 3.26277 9.38889 3.55745C9.38889 3.85214 9.27183 4.13475 9.06345 4.34313C8.85508 4.5515 8.57246 4.66857 8.27778 4.66857H2.72222V18.0019H16.0556V12.4463C16.0556 12.1517 16.1726 11.869 16.381 11.6607C16.5894 11.4523 16.872 11.3352 17.1667 11.3352C17.4614 11.3352 17.744 11.4523 17.9523 11.6607C18.1607 11.869 18.2778 12.1517 18.2778 12.4463V18.0019C18.2778 18.5913 18.0437 19.1565 17.6269 19.5732C17.2102 19.99 16.6449 20.2241 16.0556 20.2241H2.72222C2.13285 20.2241 1.56762 19.99 1.15087 19.5732C0.734126 19.1565 0.5 18.5913 0.5 18.0019V4.66857Z" fill="#F8FAFC" />
        </svg>
  )
}

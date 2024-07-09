import { Card } from 'antd';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../store';
import { setPath } from '../../header';
import { cn } from '../../../libs';

const { Meta } = Card;

interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  urlImage?: string;
  altImage?: string;
  classNameImage?: string;
  navigateUrl: string;
}

export function Cell({
  className,
  description,
  title,
  urlImage,
  altImage,
  classNameImage,
  navigateUrl,
}: CardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Card
      hoverable
      onClick={() => {
        navigate(navigateUrl);
        dispatch(setPath(navigateUrl));
      }}
      className={cn(
        'bg-white/50 backdrop-blur-xl w-60 h-52 border-transparent',
        className
      )}
      cover={
        urlImage ? (
          <img
            loading="lazy"
            className={cn(
              'object-cover object-center w-full h-28',
              classNameImage
            )}
            alt={altImage || 'preview'}
            src={urlImage}
          />
        ) : null
      }>
      <Meta
        title={title}
        description={description}
      />
    </Card>
  );
}

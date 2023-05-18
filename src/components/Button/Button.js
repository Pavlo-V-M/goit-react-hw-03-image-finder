
import React from 'react';

const Button = (props) => {
  const { onLoadMore } = props;
  
  return (
    <div className="LoadMoreWrap">
      <button type="buttton" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>    
  );
};

export default Button;
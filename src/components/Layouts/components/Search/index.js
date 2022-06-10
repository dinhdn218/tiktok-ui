import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/components/Icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inpRef = useRef(null);

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setSearchResult([]);
        setLoading(false);
      });
  }, [searchValue]);
  console.log(searchResult);

  const handleClear = () => {
    setSearchValue('');
    inpRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      onClickOutside={handleHideResult}
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('search-title')}>Accounts</div>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inpRef}
          className={cx('search-input')}
          placeholder="Search accounts and videos"
          value={searchValue}
          onFocus={() => setShowResult(true)}
          onChange={(e) => {
            if (e.target.value.startsWith(' ')) {
              return;
            } else {
              setSearchValue(e.target.value);
            }
          }}
        />
        {loading && (
          <FontAwesomeIcon
            className={cx('search-loading-icon')}
            icon={faSpinner}
          />
        )}
        {!!searchValue.trim() && !loading && (
          <FontAwesomeIcon
            className={cx('search-clear-icon')}
            icon={faCircleXmark}
            onClick={handleClear}
          />
        )}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
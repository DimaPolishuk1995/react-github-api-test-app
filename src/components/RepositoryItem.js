import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faStar} from '@fortawesome/free-solid-svg-icons';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  transition: box-shadow 0.2s ease-in-out;
  margin: 0 0 20px 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px 0px rgba(27, 31, 35, 0.1);
    background-color: #f6f8fa;
  }
`;

const Image = styled.img`
   width: 64px;
   height: 64px;
   border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0366d6;
  margin: 0;
`;

const Description = styled.p`
   font-size: 14px;
   color: #586069;
   margin: 0;
`;

const RepoMeta = styled.div`
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-size: 14px;
        color: #586069;
      }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  gap: 10px;
  flex: 1 0 auto
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
  
  >.star-icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      color: #FFC22B;
  }
  
  >.eye-icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      color: #000;
  }
  
  >span {
    color: #586069;
  }
`;

const RepositoryItem = ({repo}) => {
    const {name, description, stargazers_count, watchers_count, owner, language, html_url} = repo;
    return (
        <Link to={html_url} onClick={(event) => {
            event.preventDefault();
            window.open(html_url, '_blank');
        }}>
            <ItemContainer>
                <Image src={owner.avatar_url} alt="Repository owner"/>
                <InfoContainer>
                    <Name>{name}</Name>
                    <RepoMeta>
                        <div className="repo-meta-item">
                            <span>{language}</span>
                        </div>
                    </RepoMeta>
                    <Description>{description}</Description>
                </InfoContainer>
                <Stats>
                    <Stat>
                        <FontAwesomeIcon icon={faStar} className={'star-icon'}/>
                        <span>{stargazers_count} stars</span>
                    </Stat>
                    <Stat>
                        <FontAwesomeIcon icon={faEye} className={'eye-icon'}/>
                        <span>{watchers_count} watchers</span>
                    </Stat>
                </Stats>
            </ItemContainer>
        </Link>
    );
};

export default RepositoryItem;

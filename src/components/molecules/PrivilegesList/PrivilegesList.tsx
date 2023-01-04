import React from 'react'
import { PrivilegesListProps } from './PrivilegesList.types'
import * as S from './PrivilegesList.styles'

export const PrivilegesList = ({
  chosenPrivileges,
  privileges,
  idsToRender = [],
  depthLevel = 0,
}: PrivilegesListProps) => {

  if (!idsToRender.length) {
    idsToRender = privileges.filter((i) => !i.parentId).map((i) => i.id);
  }

  const getChildNodes = (parentId: number) => {
    const nodeItems = privileges.filter((i) => i.parentId === parentId);
    if (!nodeItems.length) return null;
    return (
      <PrivilegesList
        privileges={privileges}
        idsToRender={nodeItems.map((i) => i.id)}
        depthLevel={depthLevel + 1}
        chosenPrivileges={chosenPrivileges}
      />
    );
  };

  return (
    <S.List depthLevel={depthLevel}>
      {idsToRender.map((id) => {
        const item = privileges.find((i) => i.id === id)!;
        const { label } = item
        return (
          <React.Fragment key={item.id}>
            <S.ListItem>
              {label}
            </S.ListItem>
            {getChildNodes(item.id)}
          </React.Fragment>
        );
      })}
    </S.List>
  )
}

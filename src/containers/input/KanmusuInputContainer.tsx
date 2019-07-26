import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../modules';
import { update } from '../../modules/kanmusu';

const mapDispatchToProps = {
  update
};

type OwnProps = {};
type StateProps = {
  code: string;
};
type DispatchProps = typeof mapDispatchToProps;

type KanmusuInputContainerProps = OwnProps & StateProps & DispatchProps;

const KanmusuInputContainer: React.FC<KanmusuInputContainerProps> = ({
  code,
  update
}) => {
  const onChange = useCallback(e => update(e.target.value), [update]);
  return (
    <div>
      <a
        href="http://kancolle-calc.net/kanmusu_list.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        kanmusu list
      </a>
      {': '}
      <input value={code} onChange={onChange} placeholder=".2|1:[...]" />
    </div>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    code: state.kanmusu.code
  }),
  mapDispatchToProps
)(KanmusuInputContainer);

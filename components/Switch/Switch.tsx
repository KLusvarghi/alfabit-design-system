import React, { useState } from 'react';
import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useStyle from './Switch.style';

export type SwitchProps = {
  defaultEnable?: boolean;
  variant?: 'common' | 'contract'; //sendo common sem icone e contract com icone
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;
// desestruturando defaultEnable e renomeando para enabledByDefault;
const Switch = ({
  defaultEnable: enabledByDefault,
  variant = 'common',
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  // importando os estilos
  const style = useStyle({ variant, enabled, disabled });

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState); // caso o onChange exista ele passa o novo estado para ele
  };

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      className={style.Container} //sendo a propriedade extraida do switch.styled.ts
      {...rest}
    >
      {/* esse span não irá aparecer na tela, apenas quando nosso compoennte não for renderizado e não estiver disponivel*/}
      <span className="sr-only">switch toggle</span>
      {variant === 'common' && <span className={style.Switch} />}
      {variant === 'contract' && (
        <span className={style.Switch}>
          {/* caso o enabled seja true ele passa o  ria-disabled por acessiblididade e passa o disabled que pode ser true ou false */}
          {enabled && (
            <CheckIcon className={style.Icon} aria-disabled={disabled} />
          )}
          {/* caso ele não seteja checado (o enabled seja false) ele exibe o icone do X */}
          {enabled || (
            <XMarkIcon className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
      )}
    </HeadlessSwitch>
  );
};

export default Switch;

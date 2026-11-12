import * as React from "react";
import { Dropdown, Icon, DropdownProps } from "semantic-ui-react";

/**
 * Remplace l'ancien `DropdownCustom` qui avait été ajouté à la main dans
 * node_modules/semantic-ui-react (prop `leftIcon`). Il n'existe dans aucune
 * version publiée de semantic-ui-react, ce qui cassait toute installation propre.
 */
interface DropdownCustomProps extends DropdownProps {
  leftIcon?: string;
}

const DropdownCustom = ({ leftIcon, text, ...rest }: DropdownCustomProps) => (
  <Dropdown
    {...rest}
    trigger={
      <span>
        {leftIcon && <Icon name={leftIcon as any} />}
        {text}
      </span>
    }
  />
);

DropdownCustom.Menu = Dropdown.Menu;
DropdownCustom.Item = Dropdown.Item;
DropdownCustom.Divider = Dropdown.Divider;
DropdownCustom.Header = Dropdown.Header;

export default DropdownCustom;

import React from "react";
import { MenuItem } from "../utils/menuModel";
import {Box, List, ListItem, ListItemText, Collapse, ButtonBase,} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import * as Icons from "@mui/icons-material";

const getIcon = (iconId: string | undefined) => {
    if (!iconId) return null;
    const IconComponent = Icons[iconId as keyof typeof Icons];
    return IconComponent ? <IconComponent /> : null;
};

interface NestedMenuProps {
    items: MenuItem[];
}

const NestedMenu: React.FC<NestedMenuProps> = ({ items }) => {
    const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

    const handleToggle = (id: string) => {
        setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const renderMenu = (items: MenuItem[]) => (
        <List>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <ListItem component="div" disablePadding>
                        <ButtonBase
                            onClick={(e) => {
                                if (item.children) {
                                    e.preventDefault();
                                    handleToggle(item.id);
                                }
                            }}
                            style={{ width: "100%", textAlign: "left" }}
                        >
                            {getIcon(item.iconId)} {/* Dynamically render icons */}
                            <ListItemText primary={item.title} />
                            {item.children && (openItems[item.id] ? <ExpandLess /> : <ExpandMore />)}
                        </ButtonBase>
                    </ListItem>
                    {item.children && (
                        <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                            <Box sx={{ pl: 4 }}>{renderMenu(item.children)}</Box>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );

    return <Box>{renderMenu(items)}</Box>;
};

export default NestedMenu;

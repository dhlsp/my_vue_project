// 引入element ui组件
import Vue from 'vue';
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Pagination,
  Autocomplete,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Loading,
  MessageBox,
  Message,
  Badge,
  Collapse,
  CollapseItem,
  Transfer,
  Spinner,
  Card,
  Progress,
  Tooltip,
  Radio,
  TimePicker,
  Cascader,
  RadioGroup,
  Steps,
  Step,
  Slider,
  Rate,
  InputNumber,
  Popover,
} from 'element-ui';

// element ui 加载
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Transfer);
Vue.use(Card);
Vue.use(Progress);
Vue.use(Tooltip);
Vue.use(Radio);
Vue.use(TimePicker);
Vue.use(Cascader);
Vue.use(RadioGroup);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Slider);
Vue.use(Rate);
Vue.use(InputNumber);
Vue.use(Popover);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

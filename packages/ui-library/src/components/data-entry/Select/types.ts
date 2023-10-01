import type { Ref } from "vue";

export type Value = string | number;

export interface Store {
  rootProps: SelectProps;
  rootEmits: SelectEmits;
  triggerRef: Ref<HTMLSpanElement | undefined>;
  optionsRef: Ref<HTMLUListElement | undefined>;
  state: {
    valueLabelMap: Map<Value, string>;
    popupVisible: boolean;
    floatingElementWidth: number;
    searchInputValue: string;
  };
  actions: {
    handleClear: () => void;
    visibleChange: () => void;
  };
}

export interface SelectProps {
  modelValue: Value | undefined;
  placeholder?: string;
  localSearch?: boolean;
}

export interface SelectEmits {
  (e: "update:modelValue", value: Value | Value[] | undefined): void;
  (e: "change", value: Value | Value[] | undefined): void;
}

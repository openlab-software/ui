<script setup lang="ts">
import * as styles from "@openlab-ui/core/datatable/datatable.css";
import * as tableStyles from "@openlab-ui/core/table/table.css";

interface Column<T> {
  key: keyof T;
  header: string;
  cell?: (row: T) => string;
}

interface Props<T = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  emptyText?: string;
}

const props = withDefaults(defineProps<Props>(), { emptyText: "No results." });
</script>

<template>
  <div :class="styles.datatableWrapper">
    <div :class="tableStyles.tableContainer">
      <table :class="tableStyles.table">
        <thead :class="tableStyles.thead">
          <tr :class="tableStyles.tr">
            <th
              v-for="col in props.columns"
              :key="String(col.key)"
              :class="tableStyles.th"
            >
              {{ col.header }}
            </th>
          </tr>
        </thead>
        <tbody :class="tableStyles.tbody">
          <template v-if="props.data.length">
            <tr
              v-for="(row, i) in props.data"
              :key="i"
              :class="tableStyles.tr"
            >
              <td
                v-for="col in props.columns"
                :key="String(col.key)"
                :class="tableStyles.td"
              >
                {{ col.cell ? col.cell(row) : row[col.key] }}
              </td>
            </tr>
          </template>
          <tr v-else :class="tableStyles.tr">
            <td
              :colspan="props.columns.length"
              :class="[tableStyles.td, styles.emptyCell]"
            >
              {{ props.emptyText }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

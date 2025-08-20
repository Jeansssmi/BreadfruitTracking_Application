import { Stack } from "expo-router";

export default function TreeLayout() {
  return (
    <Stack>
      <Stack.Screen name="tree-list" options={{headerTitle: 'Trees Tracked'}} />
      <Stack.Screen name="add-tree" options={{headerTitle: 'Add Tree'}} />
      <Stack.Screen name="pending-tree" options={{headerTitle: 'Pending Approvals'}} />
      <Stack.Screen name='search' options={{headerShown: false}}/>
      <Stack.Screen name="details/[treeID]" options={{ headerTitle: 'Tree Details'}} />
      <Stack.Screen name="user/tracked-trees" />
      <Stack.Screen name="edit/[treeID]" options={{ headerTitle: 'Edit Tree'}} />
      <Stack.Screen name="process-fruit/[treeID]" options={{ headerTitle: 'Send Attachment'}} />
    </Stack>
  );
}